import { Card, CardContent } from "../ui/card";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, role, review, rating = 5 }) => {
  return (
    <Card className="border-none shadow-sm bg-white rounded-2xl h-full">
      <CardContent className="pt-8 px-6">
        <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
        
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>

        <p className="text-slate-600 italic mb-6 leading-relaxed">
          "{review}"
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">{name}</h4>
            <p className="text-xs text-slate-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;