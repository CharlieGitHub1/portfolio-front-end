import { Circle } from '../Circle';
import { ProjectStyle } from './styled';
import { Image } from '../Image';

const Project = ({ title, text_content, main_image }) => {

    return (
        <ProjectStyle>
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
                <div className='right'>
                    {main_image &&
                        <Image
                            url={main_image.url}
                            alt={title + ' Project'}
                        />
                    }
                </div>
            </div>
        </ProjectStyle>
    )
}

export { Project }
