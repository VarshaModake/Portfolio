import React ,{Component} from 'react';

const TITLES=['a software Engineer','a music lover','an enthusiastic learner','an adventure sicker'];
class Title extends Component{
    state={titleIndex:0, fadeIn:true};
    componentDidMount()
    {
       this.timeout= setTimeout(()=>{this.setState({fadeIn:false})},2000);
        this.animateTitle();
    }
    componentWillUnmount()
    {
clearInterval(this.titleinterval);
clearTimeout(this.timeout);
    }
    animateTitle=()=>
    {
       this.titleinterval=setInterval(()=>{
            const titleIndex=(this.state.titleIndex +1)%TITLES.length;
            this.setState({titleIndex,fadeIn:true});
            this.timeout=setTimeout(() => {
                this.setState({fadeIn:false})
            }, 2000);
            
        },4000);
    }
    render()
    {
        const{fadeIn,titleIndex}=this.state;
     const title=TITLES[this.state.titleIndex] ; 
        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> I am {title}</p>
        )
        
    }
}
export default Title;