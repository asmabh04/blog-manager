interface SearchBarProps {
  search: string;
  category: string;
  sort: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={props.search}
        onChange={(e) => props.onSearchChange(e.target.value)}
      />

      <select
        value={props.category}
        onChange={(e) => props.onCategoryChange(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        {props.categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={props.sort}
        onChange={(e) => props.onSortChange(e.target.value)}
      >
        <option value="recent">Plus récent d'abord</option>
        <option value="old">Plus ancien d'abord</option>
      </select>
    </div>
  );
}

export default SearchBar;
