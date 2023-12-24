import mongoose, { Schema } from 'mongoose';
const PortfolioSchema = new Schema(
  {
    aboutme: String,
    skills: [{ title: String, url: String }],
    education: [{ title: String, url: String }],
    certifications: [{ title: String, url: String }],
    projects: [
      {
        title: String,
        urlImg: String,
        urlGithb: String,
        description: String,
        tags: [String],
      },
    ],
  },
  {
    timestamps: true,
  },
);
const Portfolio =
  mongoose.models.PortfolioData ||
  mongoose.model('PortfolioData', PortfolioSchema);

export default Portfolio;
