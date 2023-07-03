/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {
    IconAperture, 
    IconChartHistogram, 
    IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconChartDots2, 
    IconChartBar,
    IconBox
} from '@tabler/icons-react';

import {useTranslation} from "react-i18next";

import { uniqueId } from 'lodash';
import { IconList } from '@tabler/icons-react';
import { IconUserCheck } from '@tabler/icons-react';
import { IconTags } from '@tabler/icons-react';
import { IconVolume } from '@tabler/icons-react';
import { IconUserStar } from '@tabler/icons-react';
import { IconHome2 } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';



const MenuitemMsg = [
    // {
    //     navlabel: true,
    //     subheader: 'Home',
    // },

    {
        id: uniqueId(),
        title: 'Dashboard',
        icon: IconChartHistogram,
        href: '/',
    },
    {
        id: uniqueId(),
        title: 'report.report',
        icon: IconChartBar,
        href: '/report',
    },
    // {
    //     navlabel: true,
    //     subheader: 'Main Menu',
    // },


    {
        id: uniqueId(),
        title: 'order.order',
        icon: IconList,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'order.schedule',
                icon: IconLayoutDashboard,
                href: '/schedule',
            },

            {
                id: uniqueId(),
                title: 'order.orderList',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

        ]
    },

    {
        id: uniqueId(),
        title: 'item.item',
        icon: IconBox,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'item.product',
                icon: IconLayoutDashboard,
                href: '/sample-page',
            },
            {
                id: uniqueId(),
                title: 'item.service',
                icon: IconLayoutDashboard,
                href: '/sample-page',
            },
            {
                id: uniqueId(),
                title: 'item.bundle',
                icon: IconLayoutDashboard,
                href: '/sample-page',
            },
            // {
            //     id: uniqueId(),
            //     title: 'Unit',
            //     icon: IconLayoutDashboard,
            //     href: '/unit',
            // },
            // {
            //     id: uniqueId(),
            //     title: 'category-product.category',
            //     icon: IconLayoutDashboard,
            //     href: '/category-product',
            // },
            // {
            //     id: uniqueId(),
            //     title: 'uom.uom',
            //     icon: IconLayoutDashboard,
            //     href: '/uom',
            // },
        ]
    },

    {
        id: uniqueId(),
        title: 'promotions.promotions',
        icon: IconTags,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'promotions.voucher',
                icon: IconLayoutDashboard,
                href: '/schedule',
            },

            {
                id: uniqueId(),
                title: 'promotions.service',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

            {
                id: uniqueId(),
                title: 'promotions.discount',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

            {
                id: uniqueId(),
                title: 'promotions.loyaltyPoints',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

        ]
    },

    {
        id: uniqueId(),
        title: 'customer.customer',
        icon: IconUserCheck,
        href: '/customers',
    },

    {
        id: uniqueId(),
        title: 'customer.customer',
        icon: IconVolume,
        href: '/customers',
    },

    {
        id: uniqueId(),
        title: 'staff.staff',
        icon: IconUserStar,
        href: '/customers',
    },

    {
        id: uniqueId(),
        title: 'outlet.outlet',
        icon: IconHome2,
        href: '/customers',
    },

    {
        id: uniqueId(),
        title: 'setting.setting',
        icon: IconSettings,
        type:"group",
        children: [
            {
                id: uniqueId(),
                title: 'company.company',
                icon: IconLayoutDashboard,
                href: '/schedule',
            },

            {
                id: uniqueId(),
                title: 'payment.patment',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

            {
                id: uniqueId(),
                title: 'tax.tax',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

            {
                id: uniqueId(),
                title: 'notif.notif',
                icon: IconLayoutDashboard,
                href: '/order-list',
            },

        ]
    },

    // {
    //     id: uniqueId(),
    //     title: 'purchase.purchase',
    //     icon: IconAperture,
    //     type:"group",
    //     children: [
    //         {
    //             id: uniqueId(),
    //             title: 'purchase.requestPurchase',
    //             icon: IconLayoutDashboard,
    //             href: '/purchaseorder',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'purchase.purchaseOrder',
    //             icon: IconLayoutDashboard,
    //             href: '/purchaseorder',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'purchase.recevingPO',
    //             icon: IconLayoutDashboard,
    //             href: '/receiving',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'purchase.returnPO',
    //             icon: IconLayoutDashboard,
    //             href: '/return',
    //         },
    //     ]
    // },

    // {
    //     id: uniqueId(),
    //     title: 'sales.sales',
    //     icon: IconAperture,
    //     type:"group",
    //     children: [
    //         {
    //             id: uniqueId(),
    //             title: 'sales.requestOrder',
    //             icon: IconLayoutDashboard,
    //             href: '/salesOrder',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'sales.order',
    //             icon: IconLayoutDashboard,
    //             href: '/order',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'sales.deliveryOrder',
    //             icon: IconLayoutDashboard,
    //             href: '/deliveryorder',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'sales.returnDeliveryOrder',
    //             icon: IconLayoutDashboard,
    //             href: '/deliveryorder',
    //         },
    //     ]
    // },


    // {
    //     id: uniqueId(),
    //     title: 'inventory.inventory',
    //     icon: IconAperture,
    //     type:"group",
    //     children: [
    //         {
    //             id: uniqueId(),
    //             title: 'inventory.itemStock',
    //             icon: IconLayoutDashboard,
    //             href: '/itemstock',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'inventory.stockAdjustment',
    //             icon: IconLayoutDashboard,
    //             href: '/itemstock',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'inventory.stockOpname',
    //             icon: IconLayoutDashboard,
    //             href: '/stockopname',
    //         },

    //         {
    //             id: uniqueId(),
    //             title: 'inventory.goodsMovement',
    //             icon: IconLayoutDashboard,
    //             href: '/goodsmovement',
    //         },
    //     ]
    // },

    // {
    //     navlabel: true,
    //     subheader: 'customer.customer',
    // },

    // {
    //     id: uniqueId(),
    //     title: 'customer.balances',
    //     icon: IconLayoutDashboard,
    //     href: '/sample-page',
    // },
   

    // {
    //     navlabel: true,
    //     subheader: 'Master Data',
    // },

  
    // {
    //     id: uniqueId(),
    //     title: 'Company',
    //     icon: IconLayoutDashboard,
    //     href: '/sample-page',
    // },
    // {
    //     id: uniqueId(),
    //     title: 'user.user',
    //     icon: IconLayoutDashboard,
    //     href: '/user',
    // },
];

export default MenuitemMsg;
