
// const True = ({task, isDone}) => {
//   let listItem;
//   if (isDone) {
//     listItem = <li>Finish {task}</li>
//   }
//   else{
//     listItem = <li>do it {task}</li>
//   }
//   return listItem;
// };

const True = ({task, isDone}) => {
return  isDone ? <li>Finish ${task}</li> : <li>do it ${task}</li>
};


export default True;