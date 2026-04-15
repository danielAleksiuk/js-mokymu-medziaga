import Form from 'react-bootstrap/Form';

const SearchBar = ({onChangeMethod, onKeyUpMethod}) => {
    return (
        <Form.Control
            type='text'
            placeholder='Movie title....'
            id='searchBox'
            onChange={onChangeMethod}
            onKeyUp={onKeyUpMethod}
        />
    )
}

export default SearchBar;