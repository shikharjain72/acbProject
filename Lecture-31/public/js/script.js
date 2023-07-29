const btn = document.querySelector('btn');
const newTask = document.querySelector('#newTask');
const form = document.querySelector('form');
const list = document.querySelector('.taskList');

const addToList = (array) => {
    list.innerText= '';
    array.map((ele)=>{
        const li = document.createElement('li');
        li.innerText=ele;
        list.append(li);
    })
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
    let {data} = await axios.post('/addtask',{
        newTask: newTask.value
    })
    console.log(data);
    addToList(data);
    }
    catch(err){
        console.log(err);
    }
})