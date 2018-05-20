import style from './LandingPage.style';
import HaiHuiLogo from '../reusable/HaiHuiLogo/HaiHuiLogo';

export default () => {
    const scoped = (scope => ({
            className: scope.props.className,
            styles: scope.props.children
    }))(
        <scope>
          <style jsx>{style}</style>
        </scope>
    );

    return (
        <div className='landing'>
            <HaiHuiLogo 
                className={`haihui ${scoped.className}`}
            />
            <h3>Imortalizeaza momente si le punele pe hartie</h3>
            <svg width="44" height="17" viewBox="0 0 44 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Polygon" d="M25 0L46.6506 16.5H3.34936L25 0Z" transform="translate(-3 17) scale(1 -1)" fill="#054D4D"/>
            </svg>

            <style jsx>{style}</style>
        </div>
    )
}