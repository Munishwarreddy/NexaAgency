import express, { Request, Response } from 'express';
import { validateContactForm } from '../middleware/validation.js';
import { ContactFormData, ApiResponse } from '../types/index.js';

export const contactRouter = express.Router();

// In-memory storage for demo (replace with database in production)
const submissions: ContactFormData[] = [];

contactRouter.post('/contact', validateContactForm, async (req: Request, res: Response<ApiResponse>) => {
  try {
    const formData: ContactFormData = req.body;

    // Store submission
    submissions.push(formData);

    console.log('New contact form submission:');
    console.log(formData);

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user
    // Example email structure:
    // const emailData = {
    //   to: formData.email,
    //   subject: 'Welcome to MediaManager4U - We\'ll be in touch soon',
    //   template: 'contact-confirmation',
    //   data: formData
    // };
    // await sendEmail(emailData);

    res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! We\'ll be in touch soon.',
      data: {
        id: submissions.length,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// GET endpoint to view all submissions (demo only - remove in production)
contactRouter.get('/contact/submissions', (req: Request, res: Response) => {
  res.json({
    total: submissions.length,
    submissions,
  });
});
