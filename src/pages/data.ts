import { ReactComponent as WebDevSVG } from '../assets/web-dev.svg'
import { ReactComponent as MobileDevSVG } from '../assets/mobile-dev.svg'
import { ReactComponent as ProductSVG } from '../assets/product-design.svg'
import { ReactComponent as MaintenanceSVG } from '../assets/maintenance.svg'
import { ReactComponent as CMSDevSVG } from '../assets/cms-dev.svg'
import { ReactComponent as PaymentSVG } from '../assets/payment.svg'
import logoAngular from '../assets/logo-angular.png'
import logoAws from '../assets/logo-aws.png'
import logoCloud from '../assets/logo-cloud.png'
import logoCss from '../assets/logo-css.png'
import logoHtml from '../assets/logo-html.png'
import logoJs from '../assets/logo-js.png'
import logoMongo from '../assets/logo-mongo.png'
import logoMysql from '../assets/logo-mysql.png'
import logoPhp from '../assets/logo-php.png'
import logoPostgres from '../assets/logo-postgres.png'
import logoPython from '../assets/logo-python.png'
import logoReact from '../assets/logo-react.png'
import logoRuby from '../assets/logo-ruby.png'
import logoSqlServer from '../assets/logo-sqlserver.png'

import porto1Url from '../assets/porto1.jpg'
import porto2Url from '../assets/porto2.jpg'
import porto3Url from '../assets/porto3.jpg'

import logoCust1 from '../assets/logo-cust1.png'
import logoCust2 from '../assets/logo-cust2.png'
import logoCust3 from '../assets/logo-cust3.png'
import logoCust4 from '../assets/logo-cust4.png'
import logoCust5 from '../assets/logo-cust5.png'
import logoCust6 from '../assets/logo-cust6.png'
import logoCust7 from '../assets/logo-cust7.png'
import logoCust8 from '../assets/logo-cust8.png'
import logoCust9 from '../assets/logo-cust9.png'

export const services: Array<{
	svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	title: string
	desc: string
}> = [
	{
		svg: WebDevSVG,
		title: 'Website development',
		desc: 'High-performance web applications that grow with your business',
	},
	{
		svg: MobileDevSVG,
		title: 'Mobile apps development',
		desc: 'Mobile app also become central role in the day-to-day operations of the business.',
	},
	{
		svg: ProductSVG,
		title: 'Digital product design',
		desc: 'Complete digital product creations from UX prototyping to final UI designs',
	},
	{
		svg: MaintenanceSVG,
		title: 'Maintenance',
		desc: 'Maintaining a scalable and secure architecture',
	},
	{
		svg: CMSDevSVG,
		title: 'CMS development',
		desc: 'Developing a resilient software architecture centered on scalability',
	},
	{
		svg: PaymentSVG,
		title: 'Integrated payment gateway',
		desc: 'Simplify the payment system with just one step',
	},
]

export const logoUrls: Array<string> = [
	logoAws,
	logoCloud,
	logoAngular,
	logoCss,
	logoHtml,
	logoJs,
	logoPhp,
	logoReact,
	logoMongo,
	logoPython,
	logoRuby,
	logoMysql,
	logoPostgres,
	logoSqlServer,
]

export const portfolios: Array<{
	url: string
	type: string
	title: string
	desc: string
}> = [
	{
		url: porto1Url,
		type: 'Mobile apps',
		title: 'ILIOS app (B2B E-commerce)',
		desc: 'Has a unique selling point where not all companies offer applications for sales, data collection and management.',
	},
	{
		url: porto2Url,
		type: 'Website development',
		title: 'Home and Living',
		desc: 'Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.',
	},
	{
		url: porto3Url,
		type: 'Website development',
		title: 'Hippo',
		desc: 'Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment.',
	},
]

export const customers: Array<string> = [
	logoCust1,
	logoCust2,
	logoCust3,
	logoCust4,
	logoCust5,
	logoCust6,
	logoCust7,
	logoCust8,
	logoCust9,
]
