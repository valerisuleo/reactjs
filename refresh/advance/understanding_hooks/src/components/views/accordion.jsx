import { useState } from "react";
import BoorstrapAccordion from "../../common/components/bootStrapAccordion";

export default function AccordionRoute() {
	const getAccordionItems = () => {
		return [
			{
				title: "Accordion item #1",
				body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aliquid voluptate est ad quibusdam itaque similique sapiente doloribus quo laboriosam ipsum voluptatibus animi architecto, esse blanditiis pariatur? Adipisci, nihil dolorem.",
				isActive: false,
			},
			{
				title: "Accordion item #2",
				body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aliquid voluptate est ad quibusdam itaque similique sapiente doloribus quo laboriosam ipsum voluptatibus animi architecto, esse blanditiis pariatur? Adipisci, nihil dolorem.",
				isActive: false,
			},
			{
				title: "Accordion item #3",
				body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aliquid voluptate est ad quibusdam itaque similique sapiente doloribus quo laboriosam ipsum voluptatibus animi architecto, esse blanditiis pariatur? Adipisci, nihil dolorem.",
				isActive: false,
			},
		];
	};
	const [items, setItems] = useState(getAccordionItems());

	return <BoorstrapAccordion collection={items}></BoorstrapAccordion>;
}
