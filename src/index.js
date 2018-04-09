import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider,connect} from 'react-redux'

function funtest(state,action){
    console.log('state',state,action)
    switch (action.type) {
        case 'test':
            return Object.assign(state,{test:action.payload})
        default:
            return state || {}  
    }
}

const fun1 = (store) => {
    console.log('store',store);
    return (next) =>{
        console.log('next',next)
        return (action) =>{
            next(action)
            console.log('action',action);
        }
    }
}

const fun2 = (store) => {
    console.log('store',store);
    return (next) =>{
        console.log('next',next)
        return (action) =>{
            next(action)
            console.log('action',action);
        }
    }
}

const store = createStore(combineReducers({funtest}),{a:1},applyMiddleware(fun1,fun2,fun1))
console.log('输出state',store.getState());
console.log('输出action',store.dispatch({type:'test',payload:'asdasd'}));
console.log('输出state',store.getState())

store.subscribe(()=>{
    console.log('输出store最新变化',store.getState());
})

@connect((state)=>({...state}),null,null,{withRef:true})
class AppView extends React.PureComponent{
    render(){
        console.log('this',this.props)
        return (
            <div style={{backgroundColor:'red',flex:1,width:200,height:200,}}>
            </div>
        )
    }
}

const App = () =>{
    return (
        <Provider store={store}>
            <AppView/>
        </Provider>
    )
}
ReactDOM.render (<App />,document.getElementById('root'));

