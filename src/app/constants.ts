export const constant = {
    sidebarDemoLinks: [
        {
            label: 'Item 1 (with Font awesome icon)',
            imageIcon: '/assets/batman.jpg',
            items: [
                {
                    label: 'Alter Configurations',
                    faIcon: 'fab fa-500px',
                    items: [
                        {
                            label: 'Default',
                            link: '/demo-one',
                            icon: 'favorite'
                        },
                        {
                            label: 'Changing Colours',
                            link: '/demo two',
                            icon: 'favorite_border'
                        },
                        {
                            label: 'Changing Padding',
                            link: '/demo/12',
                            icon: 'favorite_border'
                        },
                        {
                            label: 'Changing Background',
                            link: '/demo-number/12',
                            icon: 'favorite_border'
                        }
                    ]
                },
                {
                    label: 'Alter Items Array',
                    icon: 'alarm',
                    items: [
                        {
                            label: 'Default',
                            icon: 'favorite'
                        },
                        {
                            label: 'Remote Json',
                            icon: 'favorite_border'
                        },
                        {
                            label: 'Dynamic arrays',
                            icon: 'favorite_border'
                        }
                    ]
                }
            ]
        },
        {
            label: 'NPM',
            icon: 'favorite',
            link: '/demo-number/12',
            externalRedirect: false
        }
    ],
    sidebarConfigurations: {
        paddingAtStart: false,
        interfaceWithRoute: true,
        collapseOnSelect: true,
        highlightOnSelect: false,
        rtlLayout: false
    },
    appItems: [
        {
            label: 'Item 1 with Font awesome icon',
            faIcon: 'fab fa-500px',
            items: [
                {
                    label: 'Item 1.1',
                    link: '/item-1-1',
                    faIcon: 'fab fa-accusoft'
                },
                {
                    label: 'Item 1.2',
                    faIcon: 'fab fa-accessible-icon',
                    items: [
                        {
                            label: 'Item 1.2.1',
                            link: '/item-1-2-1',
                            faIcon: 'fas fa-allergies'
                        },
                        {
                            label: 'Item 1.2.2',
                            faIcon: 'fas fa-ambulance',
                            items: [
                                {
                                    label: 'Item 1.2.2.1',
                                    link: 'item-1-2-2-1',
                                    faIcon: 'fas fa-anchor',
                                    items: [
                                        {
                                            label: 'Item 1.1',
                                            link: '/item-1-1',
                                            faIcon: 'fab fa-accusoft'
                                        },
                                        {
                                            label: 'Item 1.2',
                                            faIcon: 'fab fa-accessible-icon',
                                            items: [
                                                {
                                                    label: 'Item 1.2.1',
                                                    link: '/item-1-2-1',
                                                    faIcon: 'fas fa-allergies'
                                                },
                                                {
                                                    label: 'Item 1.2.2',
                                                    faIcon: 'fas fa-ambulance',
                                                    items: [
                                                        {
                                                            label: 'Item 1.2.2.1',
                                                            link: 'item-1-2-2-1',
                                                            faIcon: 'fas fa-anchor'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Item 2',
            icon: 'alarm',
            items: [
                {
                    label: 'Item 2.1',
                    link: '/item-2-1',
                    icon: 'favorite'
                },
                {
                    label: 'Item 2.2',
                    link: '/item-2-2',
                    icon: 'favorite_border'
                }
            ]
        },
        {
            label: 'Item 3',
            link: '/item-3',
            icon: 'offline_pin'
        },
        {
            label: 'Item 4',
            link: '/item-4',
            icon: 'star_rate',
            hidden: true
        }
    ],
    item: {
        label: 'Item 1 with Font awesome icon',
        faIcon: 'fab fa-500px',
        items: [
            {
                label: 'Item 1.1',
                link: '/item-1-1',
                faIcon: 'fab fa-accusoft'
            },
            {
                label: 'Item 1.2',
                faIcon: 'fab fa-accessible-icon',
                items: [
                    {
                        label: 'Item 1.2.1',
                        link: '/item-1-2-1',
                        faIcon: 'fas fa-allergies'
                    },
                    {
                        label: 'Item 1.2.2',
                        faIcon: 'fas fa-ambulance',
                        items: [
                            {
                                label: 'Item 1.2.2.1',
                                link: 'item-1-2-2-1',
                                faIcon: 'fas fa-anchor',
                                items: [
                                    {
                                        label: 'Item 1.1',
                                        link: '/item-1-1',
                                        faIcon: 'fab fa-accusoft'
                                    },
                                    {
                                        label: 'Item 1.2',
                                        faIcon: 'fab fa-accessible-icon',
                                        items: [
                                            {
                                                label: 'Item 1.2.1',
                                                link: '/item-1-2-1',
                                                faIcon: 'fas fa-allergies'
                                            },
                                            {
                                                label: 'Item 1.2.2',
                                                faIcon: 'fas fa-ambulance',
                                                items: [
                                                    {
                                                        label: 'Item 1.2.2.1',
                                                        link: 'item-1-2-2-1',
                                                        faIcon: 'fas fa-anchor'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
