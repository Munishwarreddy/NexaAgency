import { Request, Response, NextFunction } from 'express';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { fullName, businessName, email, businessType, phone, services, funded, teamSize, role } = req.body;

  // Check required fields
  if (!fullName || fullName.trim() === '') {
    res.status(400).json({ error: 'Full name is required' });
    return;
  }

  if (!businessName || businessName.trim() === '') {
    res.status(400).json({ error: 'Business name is required' });
    return;
  }

  if (!email || !isValidEmail(email)) {
    res.status(400).json({ error: 'Valid email is required' });
    return;
  }

  if (!businessType || businessType.trim() === '') {
    res.status(400).json({ error: 'Business type is required' });
    return;
  }

  if (!phone || !isValidPhone(phone)) {
    res.status(400).json({ error: 'Valid phone number is required' });
    return;
  }

  if (!services || services.trim() === '') {
    res.status(400).json({ error: 'Services required is required' });
    return;
  }

  if (!funded || funded.trim() === '') {
    res.status(400).json({ error: 'Funding status is required' });
    return;
  }

  if (!teamSize || teamSize.trim() === '') {
    res.status(400).json({ error: 'Team size is required' });
    return;
  }

  if (!role || role.trim() === '') {
    res.status(400).json({ error: 'Role is required' });
    return;
  }

  next();
};
