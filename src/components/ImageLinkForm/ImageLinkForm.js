import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3 white'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div>
				<div className='form pa3 br3 shadow-5 w-60 center'>
					<input className='f6 pa2 w-30 center' type="text" />
					<button className='w-20 center grow f6 link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;