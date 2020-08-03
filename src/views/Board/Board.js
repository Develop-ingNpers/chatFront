import React from "react";
// react plugin for creating charts
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


import { connect } from 'react-redux';
//import { getBoards } from '../modules/board'

import { getBoards } from 'module/board'
import { getBoard } from 'module/board'
import { deleteBoard } from 'module/board'

import { postBoard } from 'module/board'

import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import AccessTime from "@material-ui/icons/AccessTime"
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

const { useEffect } = React;

const Board = ({
  // 게시판 목록 처리
  boards,  // 게시판 목록
  loadingBoards, // 게시판 로딩 중 확인
  getBoards, // 게시판 목록 불러오기 함수
  
  // 게시판 단건 처리 
  board,   // 게시판 단건 
  loadingBoard, // 게시판 단건 로딩 중 확인
  getBoard, // 게시판 단건 불러오기 함수

  // 게시판 삭제 처리
  deleteBoard, // 게시판 삭제 처리 함수

}) => {
  useEffect(() => {
      getBoards();
    },[getBoards]
    );
  const classes = useStyles();

  const getBoardFunction = (bId) => {
    getBoard(bId);
  }

  const deleteBoardFunction = (bId) => {
    if(window.confirm("정말로 게시글을 삭제하시겠습니까?") == true){
      deleteBoard(bId);
      alert('게시글이 삭제 되었습니다.');
      document.location.href="/admin/board"
    }
    else{
      return ;
    }
  }


  return (
    <GridContainer>
         
      <GridItem xs={12} sm={12} md={12}>
      <Card>
                          <CardHeader color="success">
                          </CardHeader>
                            <h4 className={classes.cardTitleWhite}>게시판</h4>
                            <CardBody>
                              <Table>
                              <TableHead>
                              <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>게시판</TableCell>
                                <TableCell>제목</TableCell>
                                <TableCell>게시자</TableCell>
                                <TableCell>게시일자</TableCell>
                                <TableCell>좋아요</TableCell>
                                <TableCell>조회</TableCell>
                              </TableRow>
                            </TableHead>
                {loadingBoards && '로딩 중...'}
                {!loadingBoards && boards && (
                    <TableBody>
                        {boards.map(user => (
                          //<TableRow key={user.id} onClick={getBoardFunction(user.bId)}>
                          <TableRow key={user.id} onClick={() => getBoardFunction(user.bId)}>
                            <TableCell>
                              {user.bId} 
                            </TableCell>
                            <TableCell>
                              {user.boardType} 
                            </TableCell>
                            <TableCell>
                              {user.title} 
                            </TableCell>
                            <TableCell>
                              {user.id}
                            </TableCell>
                            <TableCell>
                              {user.regDate} 
                            </TableCell>
                            <TableCell>
                              {user.likeCnt} 
                            </TableCell>
                            <TableCell>
                              {user.viewCnt} 
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                )}
                </Table>
                </CardBody>
                   </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>     
                  {loadingBoard && '로딩 중...'}
                  {!loadingBoard && board && (
                     <Card chart>
                     <CardHeader color="danger">
                     </CardHeader>
                     <CardBody>
                     <Button color="primary">수정</Button>
                     <Button color="primary" 
                     onClick={() => deleteBoardFunction(board.bId)} 
                     >삭제</Button>
                      <h4 className={classes.cardTitle}> {board.title}</h4>
                      <p className={classes.cardCategory}>{board.regDate}</p>
                     
                      <CardFooter chart>
                         <div className={classes.stats}>
                           <p className={classes.cardCategory}>{board.content}</p>
                        </div>
                      </CardFooter>
                     </CardBody>
                     </Card>
                          )}
                </GridItem>
      </GridContainer>
  );
}
export default connect(
  ({ board, loading }) => ({
    boards : board.boards,
    board : board.board,

    
    // 추가
    //loadingBoards : board.loading.GET_BOARDS,
    loadingBoards : loading['board/GET_BOARDS'],
    // loading 모듈 아래의 board/GET_BOARDS를 가져온다. 
    
    //loadingBoard : board.loading.GET_BOARD
    loadingBoard : loading['board/GET_BOARD'],
    
    loadingDelete : loading['board/DELETE_BOARD']
  }),
  {
    getBoards,
    //postBoard,
    getBoard,
    deleteBoard
  }
)(Board);
