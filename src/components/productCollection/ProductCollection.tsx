import React from "react";
import styles from "./ProductCollection.module.css";
import { Row, Col, Typography, Divider } from "antd";
import { ProductImage } from "./ProductImage";

interface PropsType {
	title: JSX.Element;
	sideImage: string;
	products: any[];
}

export const ProductCollection: React.FC<PropsType> = ({
	title,
	sideImage,
	products,
}) => {
	return (
		<>
			<div className={styles.content}>
				<Divider orientation="left">{title}</Divider>
				<Row>
					<Col span={4}>
						<img src={sideImage} className={styles["side-image"]} alt="" />
					</Col>
					<Col span={20}>
						<Row>
							<Col span={12}>
								<ProductImage
									id={products[0].id}
									size={"large"}
									title={products[0].title}
									imageSrc={products[0].touristRoutePictures[0].url}
									price={products[0].price}
								></ProductImage>
							</Col>
							<Col span={12}>
								<Row>
									<Col span={12}>
										<ProductImage
											id={products[1].id}
											size={"small"}
											title={products[1].title}
											imageSrc={products[1].touristRoutePictures[0].url}
											price={products[1].price}
										></ProductImage>
									</Col>
									<Col span={12}>
										<ProductImage
											id={products[2].id}
											size={"small"}
											title={products[2].title}
											imageSrc={products[2].touristRoutePictures[0].url}
											price={products[2].price}
										></ProductImage>
									</Col>
								</Row>
								<Row>
									<Col span={12}>
										<ProductImage
											id={products[3].id}
											size={"small"}
											title={products[3].title}
											imageSrc={products[3].touristRoutePictures[0].url}
											price={products[3].price}
										></ProductImage>
									</Col>
									<Col span={12}>
										<ProductImage
											id={products[4].id}
											size={"small"}
											title={products[4].title}
											imageSrc={products[4].touristRoutePictures[0].url}
											price={products[4].price}
										></ProductImage>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							{products.map((product, index) => {
								if (index > 4) {
									return (
										<>
											<Col span={6}>
												<ProductImage
													id={product.id}
													size={"small"}
													title={product.title}
													imageSrc={product.touristRoutePictures[0].url}
													price={product.price}
												></ProductImage>
											</Col>
										</>
									);
								}
							})}
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
};
