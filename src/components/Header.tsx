import React, { ChangeEventHandler, Component, useState } from 'react'
interface HeaderProps {
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    value: string | number | readonly string[] | undefined; 
}
class Header extends Component<HeaderProps> {
  render(){
    return (
    <div className='header'>
        <input type='search' placeholder='search here...' value={this.props.value} onChange={this.props.onChange} className='filter-search'/>
    </div>
  )
  }
  
}

export default Header
