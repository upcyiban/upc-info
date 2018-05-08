<template>
	<div class="footer">
            <ul class="clear">
                <li class="float-left">
                	<router-link :to="isCurrent('find')">
	                    <img :src="find" >
	                    <p>发现</p>
	                </router-link>
                </li>
                <li class="float-left add">
                    <router-link to="/second/publish" class="absolute-horizontal-center" style="display: block">
                        <span>+</span>
                    </router-link>
                    <img style="opacity: 0;" src="">
                    <p>发布</p>
                </li>
                <li class="float-left">
                	<router-link :to="isCurrent('user')">
	                    <img :src="user" >
	                    <p>我的</p>
	                </router-link>
                </li>
            </ul>
        </div>
</template>

<script>
	const findOn = require('@/components/SecondaryMarket/media/findOn.png')
	const findOff = require('@/components/SecondaryMarket/media/findOff.png')
	const userOn = require('@/components/SecondaryMarket/media/userOn.png')
	const userOff = require('@/components/SecondaryMarket/media/userOff.png')
	export default {
		name: 'FooterSection',
		//currentPage取值为find,publish,user三者之一
		props: ['currentPage'],
		computed: {
			find() {
				if(this.currentPage == 'find') return findOn
				else return findOff
			},
			user() {
				if(this.currentPage == 'user') return userOn
				else return userOff
			}
		},
		methods: {
			backTop() {
				window.scrollTo(0,0)
			},
			isCurrent(queryPage) {
				if(queryPage == 'user') return '/second/user-center'
				else if(queryPage == 'find') return '/second/home-page'
				else return ''
			}
		}
	}
</script>

<style scoped>
	.footer {
        position: fixed;
        width: 100%;
        max-width: 800px;
        border-top: 1px solid #D5D5D5;
        border-left: 1px solid #D5D5D5;
        border-right: 1px solid #DAD7E0;
        font-size: 0.75rem;
        padding: 10px 0;
        bottom: 0;
        background-color: #FFF;
	}
    .footer ul {
        text-align: center;
    }
    .footer ul .add {
        position: relative;
    }
    .footer ul .add a {
        width: 3.6rem;
        height: 3.6rem;
        position: absolute;
        bottom: 1.1rem;
        background-color: #3299FF;
        border-radius: 50%;
        line-height: 3.1rem;
        font-size: 4rem;
        color: white;
        vertical-align: baseline;
    }
    .footer ul li {
        width: 32%;
    }
    .footer img {
        width: 1.8rem;
        height: 1.8rem;
    }
   </style>