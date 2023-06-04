import { Accordion } from "flowbite-react";
import Heading from "@/components/UI/Heading";

const MoreOnTrusts = () => {
	return (
		<>
			<Heading content="More On Trusts:" />
			<div className={`mx-5 my-14 xl:mx-96  md:mx-16`}>
			{/* <div className={`mx-5 my-14 xl:mx-96 lg:mx-52 md:mx-16`}> */}
				<Accordion>
					<Accordion.Panel>
						<Accordion.Title>Why Have A Trust?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Trusts aren’t just for very wealthy or complicated estates. They
								could be helpful for many “average” individuals too.{" "}
								<b>
									Here are the basics of trusts: what they do, and how they can
									be used.
								</b>
							</p>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								It’s a well-documented fact that most people do no estate
								planning. Of those who do, the majority use a last will to pass
								their estate to a spouse or divide it among their children.
							</p>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Most estate plans do not establish a trust. I suggest that if
								you can make a list of people you want to share in your assets
								at your death, your plan will benefit from a trust.
							</p>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								A trust is an agreement between two parties: a founder and a
								trustee(s). Although trusts may be used for many other purposes,
								for our discussion here the trustee agrees to accept, manage and
								protect assets delivered by the founder; administer those assets
								according to the trust’s instructions; and distribute the trust
								income and principal as the trust allows only for the benefit of
								the people identified in the trust.
							</p>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								The trustee is a fiduciary. As a fiduciary, the trustee must act
								with reasonable care in administering the trust and selecting
								trust investments; avoid any conflict of interest or
								self-dealing in holding, purchasing and selling trust assets;
								and diligently avoid breaching any of the trustee’s many duties
								to the settlor and the trust beneficiaries.
							</p>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								The trustee owes a duty of obedience to follow the trust terms,
								a duty of prudence and reasonableness in making investment and
								administrative decisions, a duty of objectivity in not giving
								preference to any beneficiary over equally situated
								beneficiaries, and a duty of transparency in providing trust
								information and accountings as prescribed in the trust
								agreement.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>
							Benefits And Advantages To Having A Trust
						</Accordion.Title>
						<Accordion.Content>
							
								<ul style={{listStyleType:"disc"}} className="mb-2 text-gray-500 dark:text-gray-400">
									<li className="mb-2">
										To manage and control spending and investments to protect
										beneficiaries from poor judgment and waste
									</li>
									<li className="mb-2">
										To avoid court-supervised probate of trust assets and be
										private.
									</li>
									<li className="mb-2">
										To protect trust assets from the beneficiaries’ creditors.
									</li>
									<li className="mb-2">
										To protect premarital assets from the division between
										divorcing spouses.
									</li>
									<li className="mb-2">
										To set aside funds to support the settlor when
										incapacitated.
									</li>
									<li className="mb-2">
										To manage unique assets that are not easily divisible, e.g.
										vacation homes, pets, recreational vehicles, mineral
										interests, timber and commercial real estate.
									</li>
									<li className="mb-2">
										To manage closely held business assets for planned business
										succession.
									</li>
									<li className="mb-2">
										To hold life insurance policies, pay premiums and collect
										the tax-free proceeds to care for beneficiaries, fund
										closely-held stock redemptions or purchases, and provide
										liquidity to the estate.
									</li>
									<li className="mb-2">
										To provide a vehicle for charitable gifting that can reduce
										income taxes and benefit the settlor, his or her spouse and
										their children.
									</li>
									<li className="mb-2">
										To provide tools for Medicaid and means-tested benefit
										eligibility for the settlor, a surviving spouse and disabled
										children.
									</li>
									<li className="mb-2">
										To provide structured income to a surviving spouse that
										protects trust assets for descendants if the spouse
										remarries.
									</li>
									<li className="mb-2">
										To reduce income taxes or shelter assets from estate and
										transfer taxes.
									</li>
								</ul>
							
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</div>
		</>
	);
};

export default MoreOnTrusts;
