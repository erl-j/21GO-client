import ImageSelector from './ImageSelector';
import * as React from "react";

const UserUploadedImage = ({url, uploadHandler}) => {

	const img = url != null ? (<img alt="img" src={url} />) : (<p>No image yet</p>);

	return (
		<div>
			{img}
			<ImageSelector clickHandler={uploadHandler}/>
		</div>
	);
};

export default UserUploadedImage;
