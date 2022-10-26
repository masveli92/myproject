import {useDispatch} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";

import {moviesListActions} from "../../redux";

const SearchInput = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const change = e => {
        setInputValue(e.target.value);
    };

        const search = () => {
        if (inputValue.length>1) {
            dispatch(moviesListActions.search({name:inputValue, page:1}));
            // navigate(`/search?query =${inputValue}`);
            navigate(`/search?input=${inputValue}`);
            setInputValue('');
        } };


    const keyPress = e => {
        if (e.code === 'Enter') {
            search();
        } };

    return (
        <div>
            <input type="text" placeholder={'input film name'} onKeyPress={keyPress} value={inputValue} onChange={change}/>
            <button onClick={search}> Search </button>
        </div>
    );
};

export {SearchInput};