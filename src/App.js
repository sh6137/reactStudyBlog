import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = '우동맛집';
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '우동 맛집', '여자 바지 추천']);
    let [logo, setLogo] = useState('ReactBlog');
    let goodNumber = [];
    for (let i = 0; i < 글제목.length; i++) {
        goodNumber.push(0);
    }
    let [따봉, 따봉변경] = useState(goodNumber);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState('');
    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>

            <button onClick={() => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천';
                글제목변경(copy);
            }}>글수정
            </button>

            <button onClick={() => {
                let newArray = [...글제목];
                newArray = newArray.sort();
                글제목변경(newArray);
            }}>정렬
            </button>

            {/*<div className='list'>*/}
            {/*    <h4>{글제목[0]}<span onClick={() => {*/}
            {/*        따봉변경(따봉 + 1)*/}
            {/*    }}> ❣️</span> {따봉} </h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className='list'>*/}
            {/*    <h4>{글제목[1]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className='list'>*/}
            {/*    <h4 onClick={() => {*/}
            {/*        setModal(!modal)*/}
            {/*    }}>{글제목[2]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}

            {
                글제목.map(function (a, i) {
                    return (
                        <div className='list' key={i}>
                            <h4 onClick={() => {
                                setModal(!modal)
                                setTitle(i);
                            }}>{글제목[i]}
                                <span onClick={(e) => {
                                    e.stopPropagation();
                                    let copy = [...따봉];
                                    copy[i] = copy[i] + 1;
                                    따봉변경(copy);
                                }}> ❣️</span> {따봉[i]} </h4>
                            <p>2월 17일 발행</p>
                            <button onClick={() => {
                                console.log("삭제");
                                let copy = [...글제목];
                                copy.splice(i, 1);
                                글제목변경(copy);
                            }}>삭제
                            </button>
                        </div>
                    )
                })
            }

            <input type={"text"} onChange={(e) => {
                입력값변경(e.target.value);
            }}/>
            <input type={"button"} value={"발행"} onClick={(e) => {
                let copy = [...글제목];
                copy.unshift(입력값);
                글제목변경(copy);
            }
            }/>

            {
                modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
            }

        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let copy = [...props.글제목];
                copy[0] = '여자 코트 추천';
                props.글제목변경(copy);
            }}>글수정
            </button>
        </div>
    )
}

// eslint-disable-next-line no-undef
class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'kim',
            age: 20
        }
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <div>안녕 {this.props.age}
                <button onClick={() => {
                    this.setState({age: 21})
                }}>버튼
                </button>
            </div>
        )
    }
}

export default App;
