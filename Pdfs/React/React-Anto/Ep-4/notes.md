PROPS EP_4:

Component create panna function venum athu extension use panikalam
ES7 + React/Redux/React Native Snippet use pananalm - instal panitu
antha component use panura file la poitu example naa User component create panuren means
User.jsx nu file create panitu rfte nu kudanum kudtha compoement create aagum

App dra component la user ooda component iruku

Prop:
example enoda App componenet la userData iruku athu User component la use paanum ana epadi use panurathu or epadi pass panurathu theriyala...
Athuku dhan props use aguthu
How to use props?
html tag la epadi attributes use panuvomo athu maari dhan props um use aagum
eg:
<img src="">
src vanthu inga attributes
like wise
anyName = {thatObject or data.key} //syntax
Age = {userData.age}
name = {userData.userName}

ithula props vanthu Age and name

then user components la argument(parameter in js) ah vangikalam props nu mention pani
function User(props){
return(
{props.name}
)
}

namba send panurathu data la receive aagura place la JS object ah receive aagum

or spreadoperator ah userPanikalam send panura apo
function App(){
return(
{...userData}
)
}

Ep-5
HOOKS:

class components la oops based concepts like state,lifecycle iruku
but athu starting la functional components use panuravanga use pana mudiyathu irunthuchu bcz of oops basic
ipo athu solve panna class component la use panura features ah functional components la use pana allow panurathu dhan HOOKS.

useState:

EventListener:
Triggering a function when a mentioned event is happened

oru data namba set pani irukom
oru event or any other work nadakum bothu antha data changes nadakuthu but athu en browser la resemble aagala but changes la console aaguthu browser la show aagala
same oru api data varuthu athu variable la store pana store aaguthu but athu browser theriyala na ena panurathu athuku use panurathu dhan useState variable
function App() {
let x=1
const handleAdd = ()=>{
x=x+1;
console.log(x); data is updating
}
return (
<div onClick={handleAdd}>
App
</div>
)
}

browser la 1 iruku console la x+1 la update aaguthu

useState is function that returns a array with parameter as first - data and second - a function
[num,function:update]

The useState hook is used to manage the state in react.
State is nothing but a simple data that change over time.
The useState hook lets us create a state variable,
initialize it with data and also gives us access to a setter function that lets us update this state.

The ability to update state is essential in the creation of modern,
responsive web applications, and can be useful to execute the following operations:
const [state, setState] = useState(initialValue)

EP-6:
useEffect:
