import styled from 'styled-components'

// ATOMS

export const Button=styled.button`
  color: black;
  border: 2px solid ;
  background: white;
  font-size: 18px;
  margin: 1em;
  padding: 0.50em 1em;
  border-radius: 5px;
`
export const InputStyle=styled.input`
  width: 50%;
  height: 7em;
  padding: 1em;
  margin: .4em;
  border-radius: 0.4em;
`

export const LiStyle = styled.li`
     font-size: 25px; 
     width: max-content;
     margin: 2rem;
     padding: .5rem;
     padding-right: 3em;
     align-items: center;
     align-content: center;
     flex-direction: column;
     position: relative;
        @media(max-width: 920px){
          font-size: 25px; 
          display: inline;
          width: max-content;
          margin: .5rem;
          padding: .5rem;
          align-items: center;
          align-content: center;
          flex-direction: row;
          position: relative;
        }
`

export const TitleStyle=styled.div`
    display: contents;
    margin-bottom: 1em;
    background-color: white;
    color: black;
    width: 'auto';
    height: 1em;
    padding: 1em;
    font-size: 30px;
     @media(max-width: 920){
        display: block;
        padding: 2em;
        width: 50%;
        height: 2em;
        overflow-y: scroll;
     }
`

export const DrawerContent = styled.div`
    background:  #a4beb1;
    border-radius: 5em;
    border-top-left-radius: 0em;
    width: 30em;
    height: 15em;
    padding: 10px 20px;
    margin: 10em auto;
    position: relative;
    align-items: center;
    border: 4px solid black;
      text{
        font-weight: bold;
        font-family: sans-serif;
        font-size: 25px;
        padding: 1em;
        position: absolute;
      }
`

// Molecules

export const DrawerStyle = styled.div`
  background-color: rgba(255, 255, 255, .6);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`

export const FormStyle = styled.form`
    display: flex;
    border-radius: 2em;
    border-bottom-left-radius: 0em;
    border-top-left-radius: 0em;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 30em;
    background: #99a09d;
    padding: 2em;
     @media (max-width: 920px){
        display: flex;
        width: 80%;
        border-radius: 2em;
        border-top-left-radius: 0em;
        border-top-right-radius: 0em;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        height: auto 100%;
        background: #99a09d;
        padding: 2em;
    }   
    @media (max-width: 370px){
        padding: 1.8em;
    }   
`

// objects

export const MenuStyle = styled.div`
    width: 35%;
    display: block;
    gap: .8em;
    overflow-y: scroll;
    border-top-right-radius: 0em;
    margin: 34px 0 34px 34px;
    height: 30em;
    background: black;
    color: white;
    padding: 2em;
    border-radius: 2em; 
    border-top-right-radius: 0em;
    border-bottom-right-radius: 0em;
      hr{
        display: none;
      }
       @media (max-width: 920px){
        display: flex;
        grid-auto-flow: column;
        width: 82%;
        height: 3em;
        flex-direction: row;
        gap: 1em;
        overflow-x: scroll;
        padding: 1.5em;
        border-radius: 2em;
        border-bottom-left-radius: 0em;
        border-bottom-right-radius: 0em;
        margin: 32px 34px 0 34px;
    } 
     @media (max-width: 750px){
        width: 83%;
    } 
    @media (max-width: 450px){
        width: 84%;
    } 

`
export const ContainerFormStyle = styled.div`
    margin: 34px 34px 34px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 920px){
      margin: 0 34px 34px 34px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`
export const ContainerStyle = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #a4beb1;
    backdrop-filter: blur(6px) ;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
      @media(max-width: 920px){
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        overflow: scroll;
       } 
`