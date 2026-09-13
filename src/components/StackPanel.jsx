export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="sticky top-24 bg-base-100 border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">Your Stack</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {stack.length} Technolog{stack.length === 1 ? 'y' : 'ies'} Selected
          </p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="py-10 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-50 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">No technologies selected yet.</p>
          <p className="text-xs text-gray-300 mt-1">Click “Add to Stack” to begin.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain rounded"
                  onError={(e) => {
                    e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="btn btn-ghost btn-xs btn-circle text-gray-400 hover:text-error"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="btn btn-outline btn-error btn-sm w-full mt-4 rounded-xl"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  )
}
