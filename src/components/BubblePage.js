import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../helpers/axiosWithAuth';
import { fetchColorList } from '../fetchData/fetchColorData'
import BubblesForm from '../components/BubblesForm'
import styled from 'styled-components'

const BubblePage = () => {

  const [colorList, setColorList] = useState([]);

  const getListData = () => {
    fetchColorList()
      .then((req => {
        setColorList(req.data);
      }))
      .catch(err => {
        console.log(err);
      })
  }

  const postColor = (color) => {
    axiosWithAuth()
      .post('/colors', color)
      .then(req => {
        setColorList(req.data)
      })
      .catch(err => {
        console.log(err);
    })
  }

  useEffect(() => {
    getListData()
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColorList={getListData} />

      <StyledPage>

        <Bubbles colors={colorList} />

      <StyledForm>
        <BubblesForm postColor={postColor} updateColors={setColorList} getColorList={getListData} ></BubblesForm>
      </StyledForm>

      </StyledPage>

    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.

const StyledPage = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;

`

const StyledForm = styled.div`
display:flex;
padding-top:4rem;
margin: 0 auto;
width:25%;

`