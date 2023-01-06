import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import Switch from "@mui/material/Switch";

import audio1 from "./assets/1.mp3";
import audio2 from "./assets/2.mp3";
import audio3 from "./assets/3.mp3";
import audio4 from "./assets/4.mp3";
import audio5 from "./assets/5.mp3";

const PreviewWrapper = styled.div`
  margin: 20px auto;
  width: fit-content;
  border: 3px solid #d3dbe2;
  border-radius: 20px;
  display: flex;
`;

const ShowSecond = styled.div`
  width: fit-content;
  font-size: 20vw;
  margin: auto;
  color: ${(props) =>
    props.nowSecond === 0 ||
    props.nowSecond === 15 ||
    props.nowSecond === 30 ||
    props.nowSecond === 45
      ? "red"
      : "black"};
`;
const PreviewBtn = styled.button`
  margin: 10px;
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 15px;
  background-color: aliceblue;
  background-color: ${(props) =>
    props.number === props.choiceSound ? "#aebecd" : "aliceblue"};
  cursor: pointer;

  &:hover {
    background-color: #aebecd;
  }
`;

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const previewIndex = [1, 2, 3, 4, 5];
  const [start, setStart] = React.useState(false);
  const [nowSecond, setNowSecond] = React.useState(new Date().getSeconds());
  const [choiceSound, setChoiceSound] = React.useState(1);

  const playAudio = (choiceSound) => {
    let second = new Date().getSeconds();
    document.title = second;
    setNowSecond(second);
    clearInterval(timer);
    console.log(second);
    if (
      (second === 0 || second === 15 || second === 30 || second === 45) &&
      start
    ) {
      switch (choiceSound) {
        case 1:
          let audio_1 = new Audio(audio1);
          audio_1.loop = false;
          audio_1.play();
          break;
        case 2:
          let audio_2 = new Audio(audio2);
          audio_2.loop = false;
          audio_2.play();
          break;
        case 3:
          let audio_3 = new Audio(audio3);
          audio_3.loop = false;
          audio_3.play();
          break;
        case 4:
          let audio_4 = new Audio(audio4);
          audio_4.loop = false;
          audio_4.play();
          break;
        case 5:
          let audio_5 = new Audio(audio5);
          audio_5.loop = false;
          audio_5.play();
          break;
        default:
          break;
      }
    }
  };

  const playPreview = (number) => {
    switch (number) {
      case 1:
        let audio_1 = new Audio(audio1);
        audio_1.loop = false;
        audio_1.play();
        break;
      case 2:
        let audio_2 = new Audio(audio2);
        audio_2.loop = false;
        audio_2.play();
        break;
      case 3:
        let audio_3 = new Audio(audio3);
        audio_3.loop = false;
        audio_3.play();
        break;
      case 4:
        let audio_4 = new Audio(audio4);
        audio_4.loop = false;
        audio_4.play();
        break;
      case 5:
        let audio_5 = new Audio(audio5);
        audio_5.loop = false;
        audio_5.play();
        break;
      default:
        break;
    }
  };
  const timer = setInterval(() => {
    playAudio(choiceSound);
  }, 1000);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <b style={{ color: "aliceblue" }}>15</b>-second timer
            </Typography>
            <Button
              onClick={() => {
                alert(
                  "크롬 오디오 자동재생 금지 정책으로 Sound conditions을 사용자가 직접 켜야합니다."
                );
              }}
              color="inherit"
            >
              readme
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <ShowSecond nowSecond={nowSecond}>{nowSecond}</ShowSecond>
      <PreviewWrapper>
        <div style={{ margin: "auto", padding: "10px" }}>
          Sound conditions :{" "}
          <Switch
            {...label}
            onClick={() => {
              clearInterval(timer);
              setStart(!start);
            }}
          />{" "}
        </div>
      </PreviewWrapper>
      <PreviewWrapper>
        <div style={{ margin: "auto", padding: "10px" }}>Preview & Choice</div>
        {previewIndex.map((number, index) => (
          <PreviewBtn
            key={index}
            number={number}
            choiceSound={choiceSound}
            onClick={() => {
              clearInterval(timer);
              setChoiceSound(number);
              playPreview(number);
            }}
          >
            {number}
          </PreviewBtn>
        ))}
      </PreviewWrapper>
    </>
  );
}

export default App;
