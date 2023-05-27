/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {
    IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconChartDots2
} from '@tabler/icons-react';

import {useTranslation} from "react-i18next";

import { uniqueId } from 'lodash';



const MenuitemMsg = [
    {
        navlabel: true,
        subheader: 'Home',
    },

    {
        id: uniqueId(),
        title: 'Dashboard',
        icon: IconLayoutDashboard,
        href: '/',
    },
    {
        navlabel: true,
        subheader: 'Main Menu',
    },

    {
        id: uniqueId(),
        title: 'purchase.purchase',
        icon: IconAperture,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'purchase.requestPurchase',
                icon: IconLayoutDashboard,
                href: '/purchaseorder',
            },

            {
                id: uniqueId(),
                title: 'purchase.purchaseOrder',
                icon: IconLayoutDashboard,
                href: '/purchaseorder',
            },

            {
                id: uniqueId(),
                title: 'purchase.recevingPO',
                icon: IconLayoutDashboard,
                href: '/receiving',
            },

            {
                id: uniqueId(),
                title: 'purchase.returnPO',
                icon: IconLayoutDashboard,
                href: '/return',
            },
        ]
    },

    {
        id: uniqueId(),
        title: 'sales.sales',
        icon: IconAperture,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'sales.requestOrder',
                icon: IconLayoutDashboard,
                href: '/salesOrder',
            },

            {
                id: uniqueId(),
                title: 'sales.order',
                icon: IconLayoutDashboard,
                href: '/order',
            },

            {
                id: uniqueId(),
                title: 'sales.deliveryOrder',
                icon: IconLayoutDashboard,
                href: '/deliveryorder',
            },

            {
                id: uniqueId(),
                title: 'sales.returnDeliveryOrder',
                icon: IconLayoutDashboard,
                href: '/deliveryorder',
            },
        ]
    },


    {
        id: uniqueId(),
        title: 'inventory.inventory',
        icon: IconAperture,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'inventory.itemStock',
                icon: IconLayoutDashboard,
                href: '/itemstock',
            },

            {
                id: uniqueId(),
                title: 'inventory.stockAdjustment',
                icon: IconLayoutDashboard,
                href: '/itemstock',
            },

            {
                id: uniqueId(),
                title: 'inventory.stockOpname',
                icon: IconLayoutDashboard,
                href: '/stockopname',
            },

            {
                id: uniqueId(),
                title: 'inventory.goodsMovement',
                icon: IconLayoutDashboard,
                href: '/goodsmovement',
            },
        ]
    },

    {
        navlabel: true,
        subheader: 'customer.customer',
    },

    {
        id: uniqueId(),
        title: 'customer.balances',
        icon: IconLayoutDashboard,
        href: '/balance',
    },

    {
        navlabel: true,
        subheader: 'Master Data',
    },

    {
        id: uniqueId(),
        title: 'Data Item',
        icon: IconAperture,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'Item',
                icon: IconLayoutDashboard,
                href: '/item',
            },
            {
                id: uniqueId(),
                title: 'Unit',
                icon: IconLayoutDashboard,
                href: '/unit',
            },
            {
                id: uniqueId(),
                title: 'Category',
                icon: IconLayoutDashboard,
                href: '/sample-page',
            },
        ]
    },
    {
        id: uniqueId(),
        title: 'Customer',
        icon: IconLayoutDashboard,
        href: '/customer',
    },
    {
        id: uniqueId(),
        title: 'Company',
        icon: IconLayoutDashboard,
        href: '/company',
    },
];

export default MenuitemMsg;
