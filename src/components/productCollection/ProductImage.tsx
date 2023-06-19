import React from "react";
import { Image, Typography } from "antd";
import { withRouter,RouteComponentProps } from "react-router-dom";
interface PropsType extends RouteComponentProps {
	id: string | number;
	size: "large" | "small";
	imageSrc: string;
	price: string | number;
	title: string;
}

const ProductImageComponent: React.FC<PropsType> = ({
	id,
	size,
	imageSrc,
	price,
	title,
    history,
    match,
    location
}) => {
	return (
		<div onClick={() => history.push(`detail/${id}`)}>
			{size === "large" ? (
				<Image src={imageSrc} height={285} width={490}></Image>
			) : (
				<Image src={imageSrc} height={120} width={240}></Image>
			)}
			<div>
				<Typography.Text>{title.slice(0, 25)}</Typography.Text>
				<Typography.Text>￥{price}起</Typography.Text>
			</div>
		</div>
	);
};

export const ProductImage = withRouter(ProductImageComponent)