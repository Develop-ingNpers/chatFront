import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

import { postBoard } from 'module/board'

import { connect } from 'react-redux';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


const useStyles = makeStyles(styles);
const { useEffect } = React;





const  BoardRegist = ({
  loadingPost,
  postBoard,
  title,
  content
}) => {
  // useEffect(() => {
  //   postBoard();
  // },[postBoard]);
  const classes = useStyles();

  const handleSave = (e) => {
    if(window.confirm("게시글을 등록 하시겠습니까?") == true){
      postBoard(
        {
          "writer":"영민",
          "title": title,
          "content":content,
          "boardType" :"1",
          "id":"sym"
      }
      );
      //history.push("/admin/board");
      alert('게시글이 등록 되었습니다.');
      document.location.href="/admin/board"
    }
    else{
      return false;
    }
   
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    if(e.target.id == 'title'){
      title = e.target.value;
    }
    else if(e.target.id =='content'){
      content = e.target.value;
    }
  }

  return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>게시글 등록</h4>
              <p className={classes.cardCategoryWhite}>게시글 등록하세요!</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="게시글 제목"
                    id="title"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={title}
                    inputProps={{
                      onChange: handleChange}}
                  />        
                </GridItem>
              </GridContainer>
              <br/>
              <br/>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>게시글</InputLabel>
                  <CustomInput
                    labelText="게시글 등록"
                    id="content-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    value={content}
                    inputProps={{
                      onChange: handleChange}}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleSave}>게시글 등록</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
  );
}
export default connect(
  ({ board , loading}) => ({
    boards : board.boards,
    loadingPost : loading['board/POST_BOARD']
  }),
  {
    postBoard
  }
)(BoardRegist);
