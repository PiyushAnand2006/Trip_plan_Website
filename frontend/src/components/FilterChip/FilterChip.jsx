export default function FilterChip({ label, active, onClick }) {
  return (
    <button
      className={`filter-chip ${active ? 'active' : ''}`}
      role="tab"
      aria-selected={active ? 'true' : 'false'}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
