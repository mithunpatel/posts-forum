import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SET_LIVE_USER } from "../store/actions";
import axios from 'axios'

export const useUser = () => {
    const value = useSelector(state => state.main.user);
    const id = useSelector(state => state.main.currentId);
    const dispatch = useDispatch();
    useEffect(() => {
        // Getting user
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then((response) => {
                dispatch(SET_LIVE_USER(response.data[0]));
            }, (error) => {
                dispatch(SET_LIVE_USER([]));
            });

    }, [dispatch,id]);

    return {
        data: value ? value : []
    }
}

