import {rerenderEntireTree} from "../render";

let state = {
    messages: [
        {id: 11, text: 'hgf'},
        {id: 22, text: 'hgfd'},
        {id: 33, text: 'xcvbnmk'},
        {id: 44, text: 'uyt'},
        {id: 55, text: 'werty'},
        {id: 66, text: 'mnhgf'},
        {id: 77, text: 'drtyu'},
    ],
    userData: [
        {userName: 'Vika', id: 1},
        {userName: 'Liza', id: 2},
        {userName: 'Alina', id: 3},
        {userName: 'Misha', id: 4},
    ],
    postData: [
        {text: 'Hello', id: 1},
        {text: 'Hjhgf', id: 2},
        {text: 'Hi', id: 3},
    ],
}

export let addPost = (postMessage) => {
    let newPost ={
        text: postMessage,
        id: 5
    };
    state.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state;