import styled from '../../styles/home.module.css';
export default function () {
    return (
        <div className={styled.Header}>
                <img src="./bx-logo.png"
                    srcSet="./bx-logo@2x.png 2x,
                        /bx-logo@3x.png 3x"
                    className={styled.BoxLog} />
        </div>
    );
}