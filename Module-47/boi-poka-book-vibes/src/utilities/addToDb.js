import { toast } from 'react-toastify';


const getStoredReadList = () =>{
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        //already exists in the list. Don't add it again
        console.log(id, 'already exists in the list');
        toast('Already exists in the list');
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigger toast from the component
        toast('Book added to the read list');
    }
}


export {getStoredReadList, addToStoredReadList};