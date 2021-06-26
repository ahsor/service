import World from './World';
import './Hello.css';
import  styles from './Hello.module.css';

export default function Hello() {
    return  (
        <div>
            <h1 className="box">Hello</h1>
            <h2 className={styles.box2}>Hello2</h2>
            <div className={styles.box2}>MyBox</div>
            <World />
        </div>
    )
}