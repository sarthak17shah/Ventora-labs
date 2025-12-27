interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  hoverTextColor: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  accentColor,
  hoverTextColor,
}: ServiceCardProps) {
  return (
    <div className="service-card group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden h-full">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentColor} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative h-full bg-card-dark rounded-[23px] p-8 flex flex-col z-10 overflow-hidden">
        {/* Background glow */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 ${accentColor.replace(
            "/20",
            "/5"
          )} rounded-full blur-3xl -mr-10 -mt-10 group-hover:${accentColor.replace(
            "/20",
            "/10"
          )} transition-all`}
        />

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:${accentColor.replace(
            "from-",
            "border-"
          )} transition-all duration-300 shadow-lg shadow-black/50`}
        >
          <span
            className={`text-3xl text-gray-300 group-hover:${hoverTextColor} transition-colors`}
          >
            {icon}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-display font-bold mb-3 text-white group-hover:${hoverTextColor} transition-colors`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Features */}
        <div className="border-t border-white/5 pt-4 mt-auto">
          <ul className="space-y-2 text-sm text-gray-500 font-mono">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${accentColor
                    .replace("from-", "bg-")
                    .replace("/20", "")}`}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

