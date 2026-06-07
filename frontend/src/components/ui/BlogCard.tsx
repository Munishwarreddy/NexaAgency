import React from 'react';

interface BlogCardProps {
  tagColor: string;
  tagLabel: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  imageUrl: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  tagColor,
  tagLabel,
  title,
  excerpt,
  readTime,
  date,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden group border border-gray-100 hover:border-transparent hover:-translate-y-2 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Tag */}
        <span
          className="absolute top-4 left-4 text-xs font-bold text-white px-3 py-1.5 rounded-full shadow-sm"
          style={{ backgroundColor: tagColor }}
        >
          {tagLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-3 line-clamp-2 group-hover:text-[#F97316] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center text-white font-bold text-xs">
              HR
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A2E]">Munishwar</p>
              <p className="text-xs text-gray-400">Founder - NEXAS</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">{date}</p>
            <p className="text-xs text-gray-400">{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
