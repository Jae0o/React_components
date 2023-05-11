import './App.css';
import Avarta from './components/Avarta';
import Profile from './components/profile';
/* JSX 문법 기초 */

// 하나의 Component에는 꼭 하나의 Tag만 반환해야한다.
// 즉 아래와 같이 여러 Tag를 사용하고 싶다면 하나의 Tag에 여러 Tag를 담는다.
function AppProfile() {
    return (
        <div className='Body'>
            <Profile
                Image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                name="another"
                job="artist"
                New="true" />
            {/* New에 true 지정 */}
            {/* props 를 통해 데이터를 불러올때는 위와 같이 명시 */}
            <Profile
                Image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                name="nobody"
                job="hunter" />
            <Avarta Image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                New="da" />
        </div>
    )
}

export default AppProfile;