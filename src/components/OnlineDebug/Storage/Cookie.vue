<template>
    <div class="Cookie box-center">
        <table>
            <tr>
                <th>Key</th>
                <th>Value</th>
            </tr>
            <tr v-for="item in cookieList">
                <td class="key">{{item[0]}}</td>
                <td class="value">{{item[1]}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'Cookie',
        data () {
            return {
                cookieList: []
            }
        },
        created () {
            const cookie = document.cookie
            const cookieList = cookie.split(';')
            this.cookieList = cookieList.map(item => {
                return item.split('=')
            })
        }
    }
</script>


<style scoped>
    .Cookie {
        max-width: 800px;
    }

    .key {
        color: black;
    }

    .value {
        color: #6AC1E7;
    }

    table {
        width: 100%;
        table-layout: fixed;
        border-collapse: separate;
    }

    table th, td {
        padding: 0.5rem 0.2rem;
        border-bottom: 1px solid #E8E8E8;
        color: rgba(0, 0, 0, .85);
    }

    table th {
        text-align: left;
    }

    table td {
        word-break: break-all;
    }

    table tr:hover {
        background-color: #E5F6FE;
    }

    table tr:first-child {
        background: #fafafa;
    }
</style>
