import ImageSelector from './ImageSelector';
import * as React from "react";

const UserUploadedImage = ({ url}) => {
	return (
		<div>
			<img src={url} />
			<ImageSelector />
		</div>
	);
};

export default UserUploadedImage;
