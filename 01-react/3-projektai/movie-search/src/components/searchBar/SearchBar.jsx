import Form from 'react-bootstrap/Form';

const SearchBar = ({onChangeMethod, onKeyUpMethod}) => {
    return (
        <Form>
            <Form.Control
                type='text'
                placeholder='Movie title....'
                id='searchBox'
                onChange={onChangeMethod}
                onKeyUp={onKeyUpMethod}
            />
            <Form.Select>
                <option value="all">All</option>
                <option value="movies">Movies</option>
                <option value="series">Tv series</option>
            </Form.Select>
        </Form>
        
    )
}

export default SearchBar;


// select box 
//     All - default
//     Movies 
//     TV series 