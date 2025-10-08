// studio/schemas/procedure.ts
import { defineType } from "sanity";

export default defineType({
  name: "procedure",
  title: "Procedure",
  type: "document",
  fields: [
    { 
      name: "title", 
      title: "Title", 
      type: "string",
      validation: (Rule) => Rule.required()
    },
    { 
      name: "slug", 
      title: "Slug", 
      type: "slug", 
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    },
    { 
      name: "department", 
      title: "Department", 
      type: "string" 
    },
    
    // ✅ NAYI FIELDS ADD KAREIN:
    { 
      name: "description", 
      title: "Description", 
      type: "text",
      description: "Short overview of the procedure"
    },
    { 
      name: "content", 
      title: "Detailed Content", 
      type: "text",
      description: "Complete detailed information about the procedure"
    },
    { 
      name: "image", 
      title: "Procedure Image", 
      type: "image" 
    },
    { 
      name: "benefits", 
      title: "Benefits", 
      type: "text",
      description: "Benefits of this procedure"
    },
    { 
      name: "preparation", 
      title: "Preparation", 
      type: "text",
      description: "Preparation steps before the procedure"
    },
    { 
      name: "recovery", 
      title: "Recovery", 
      type: "text",
      description: "Recovery process and timeline"
    },
    { 
      name: "duration", 
      title: "Duration", 
      type: "string",
      description: "e.g., 30 minutes, 2 hours, etc."
    },
    { 
      name: "anesthesia", 
      title: "Anesthesia", 
      type: "string",
      description: "Type of anesthesia used"
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string"
            },
            {
              name: "answer", 
              title: "Answer",
              type: "text"
            }
          ]
        }
      ]
    }
  ],
});