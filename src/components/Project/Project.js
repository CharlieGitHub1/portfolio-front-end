import { Circle } from '../Circle';
import { ProjectStyle } from './styled';

const Project = ({ title, text_content, main_image }) => {
    return (
        <ProjectStyle background={main_image.url}>
            <div className='container'>
                <div className='left'>
                    <div className='heading'>
                        <span>
                            Project
                        </span>
                        <Circle size='40px' />
                    </div>
                    <div className='title'>
                        <h2>
                            {title}
                        </h2>
                    </div>
                    <div className='content'>
                        <p>
                            {text_content}
                        </p>
                    </div>
                </div>
                <div className='right' />
            </div>
        </ProjectStyle>
    )
}

export { Project }
