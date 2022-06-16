import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faHtml5, faJsSquare, faReact, faCss3, faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'About me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt urna at massa mollis, in porttitor nunc faucibus. Donec dictum facilisis lacus, et consectetur ipsum imperdiet eu.</p>
                    <p>Nunc vulputate purus quis aliquam laoreet. Phasellus placerat consectetur lectus. Nullam volutpat gravida est, a molestie magna blandit a.</p>
                    <p>Nam nec ante id justo viverra pharetra. Pellentesque feugiat convallis sapien at euismod. Suspendisse sed posuere mauris. Duis hendrerit nibh eget ligula facilisis semper sit amet eu nunc.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cube-spinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNodeJs} color='#55AD20' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithub} color='#000000' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;
