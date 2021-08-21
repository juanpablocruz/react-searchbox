# react-searchbox-needleman
react-searchbox-needleman is a simple component that implements a input that searches on change from a pool of elements provided to it by usign [needleman-js](https://github.com/juanpablocruz/needleman-wunsch-javascript) algorithm.

## Installation

You can install this package by running the following command:
```bash
npm install react-searchbox-needleman
```

## Usage

In a React application use the react-searchbox-needleman components:

```javascript
import SearchBox from 'react-searchbox-needleman';

function App() {
  const [value, setValue] = useState(null)
  const pool = ["cat", "dog", "cats", "dogs", "elephant", "jiraff"]
  

  return (
    <div className="App">
      <SearchBox pool={pool} onSelect={setValue} />
      {value && <p>{`You selected: ${value}`}</p>}
    </div>
  );
}
```

## Configuration

react-searchbox-needleman accepts the following configuration options:

- pool (required): an array of strings to search from.
- onSelect (required): the callback to be called when the user selects an option from the suggestions. ``(value: string):void ``
- ariaLabel: The aria-label value for the input element
- placeholder: The placeholder string for the input element
- searchConfig: The needleman-js configuration object

## Authors

- [Juan Pablo Cruz](https://www.github.com/juanpablocruz)


## License

[MIT](LICENSE)
