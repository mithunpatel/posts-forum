import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SET_LIVE_POST } from "../store/actions";
import axios from 'axios'

export const usePost = () => {
    const value = useSelector(state => state.main.post);
    const id = useSelector(state => state.main.currentId);
    const dispatch = useDispatch();
    useEffect(() => {
        // Getting 100 posts
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
            .then(async(response) => {
                const resData = response.data[0];
                const user = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${resData.userId}`);
                const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${resData.id}`);
                if (res.data && user.data[0]) {
                    dispatch(SET_LIVE_POST({ ...resData, comments:res.data, username:user.data[0].username }))
                } 
                
            }, (error) => {
                dispatch(SET_LIVE_POST([]));
            });

    }, []);

    return {
        data: value ? value : []
    }
}

