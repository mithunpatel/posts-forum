import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SET_LIVE_POSTS } from "../store/actions";
import axios from 'axios'

export const useMain = () => {
    const value = useSelector(state => state.main.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(value)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let posts = [];
                const promise = Promise.all(
                    response.data.map(async (post) => {
                        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${post.userId}`)
                        if (res.data[0]) {
                            // const name = res.data[0].name ? res.data[0].name : "No name";
                            posts.push({ ...post, username: res.data[0].name });
                        } else {
                            posts.push({ ...post, username: "No name" });
                        }

                    })
                );

                promise.then(() => {
                    // console.log("posts:", posts)
                    dispatch(SET_LIVE_POSTS(posts));
                })


            }, (error) => {
                dispatch(SET_LIVE_POSTS([]));
            });

    }, []);

    return {
        data: value ? value : []
    }
}
