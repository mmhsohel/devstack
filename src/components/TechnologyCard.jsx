export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const badgeColors = {
    Popular: 'badge-primary',
    Versatile: 'badge-success',
    Fast: 'badge-warning',
    Standard: 'badge-info',
    'Top SQL': 'badge-accent',
    Cache: 'badge-secondary',
    Ubiquitous: 'badge-warning',
    Essential: 'badge-info',
    Robust: 'badge-neutral',
    Modern: 'badge-primary',
    Containers: 'badge-accent',
    NoSQL: 'badge-secondary',
    Minimal: 'badge-ghost',
  }

  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="card-body p-5 gap-3">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-7 h-7 object-contain"
              onError={(e) => {
                e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
              }}
            />
          </div>
          {tech.badge && (
            <span className={`badge badge-sm ${badgeColors[tech.badge] || 'badge-ghost'} font-medium`}>
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="card-title text-lg font-semibold text-white">{tech.name}</h3>
        <p className="text-sm text-white line-clamp-3 leading-relaxed">
          {tech.description}
        </p>

        <div className="flex flex-wrap items-center gap-1 mt-1">
          <span className="badge text-white badge-outline badge-sm text-xs">{tech.category}</span>
          <span className="badge badge-ghost badge-sm text-xs">{tech.difficulty}</span>
          <span className="flex items-center  text-xs font-medium text-amber-500">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            {tech.rating}
          </span>
        </div>

        <div className="card-actions mt-2">
          <button
            className={`btn btn-sm w-full ${
              isAdded
                ? 'btn-disabled bg-gray-100 text-gray-500 border-none'
                : 'btn-neutral text-white'
            }`}
            onClick={() => onAdd(tech)}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  )
}
