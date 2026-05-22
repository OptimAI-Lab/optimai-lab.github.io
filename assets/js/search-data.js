// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activity/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-2013-02-hetnet-paper",
          title: '2013 02 Hetnet Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-02-hetnet-paper/";
            },},{id: "news-2013-02-uplink-paper",
          title: '2013 02 Uplink Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-02-uplink-paper/";
            },},{id: "news-2013-03-bsum-paper",
          title: '2013 03 Bsum Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-03-bsum-paper/";
            },},{id: "news-2013-04-wiretap-paper",
          title: '2013 04 Wiretap Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-04-wiretap-paper/";
            },},{id: "news-2013-05-jsac-paper",
          title: '2013 05 Jsac Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-05-jsac-paper/";
            },},{id: "news-2014-01-promotion",
          title: '2014 01 Promotion',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-promotion/";
            },},{id: "news-2014-03-interference-pricing",
          title: '2014 03 Interference Pricing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-03-interference-pricing/";
            },},{id: "news-2014-04-siopt-paper",
          title: '2014 04 Siopt Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-04-siopt-paper/";
            },},{id: "news-2014-04-bs-activation",
          title: '2014 04 Bs Activation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-04-bs-activation/";
            },},{id: "news-2014-05-sdran-paper",
          title: '2014 05 Sdran Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-05-sdran-paper/";
            },},{id: "news-2014-05-wiretap-twireless",
          title: '2014 05 Wiretap Twireless',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-05-wiretap-twireless/";
            },},{id: "news-2014-05-bs-power",
          title: '2014 05 Bs Power',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-05-bs-power/";
            },},{id: "news-2014-06-5g-survey",
          title: '2014 06 5g Survey',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-06-5g-survey/";
            },},{id: "news-2014-08-isu-start",
          title: '2014 08 Isu Start',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-08-isu-start/";
            },},{id: "news-2014-09-parallel",
          title: '2014 09 Parallel',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-09-parallel/";
            },},{id: "news-2014-09-faculty-fellowship",
          title: '2014 09 Faculty Fellowship',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-09-faculty-fellowship/";
            },},{id: "news-2014-09-fellowship",
          title: '2014 09 Fellowship',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-09-fellowship/";
            },},{id: "news-2015-02-jsac-hetnet",
          title: '2015 02 Jsac Hetnet',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-02-jsac-hetnet/";
            },},{id: "news-2015-03-tac-paper",
          title: '2015 03 Tac Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-03-tac-paper/";
            },},{id: "news-2015-08-nsf-ccf",
          title: '2015 08 Nsf Ccf',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-08-nsf-ccf/";
            },},{id: "news-2015-08-spm",
          title: '2015 08 Spm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-08-spm/";
            },},{id: "news-2015-09-haoran",
          title: '2015 09 Haoran',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-09-haoran/";
            },},{id: "news-2015-11-coap-paper",
          title: '2015 11 Coap Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-11-coap-paper/";
            },},{id: "news-2015-11-nonconvex-admm",
          title: '2015 11 Nonconvex Admm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-11-nonconvex-admm/";
            },},{id: "news-2015-11-admm-nonconvex",
          title: '2015 11 Admm Nonconvex',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-11-admm-nonconvex/";
            },},{id: "news-2015-12-icassp",
          title: '2015 12 Icassp',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-12-icassp/";
            },},{id: "news-2016-01-async-admm",
          title: '2016 01 Async Admm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-01-async-admm/";
            },},{id: "news-2016-05-admm-linear",
          title: '2016 05 Admm Linear',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-05-admm-linear/";
            },},{id: "news-2016-06-moa",
          title: '2016 06 Moa',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-06-moa/";
            },},{id: "news-2016-08-iccopt",
          title: '2016 08 Iccopt',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-08-iccopt/";
            },},{id: "news-2016-08-nestt",
          title: '2016 08 Nestt',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-08-nestt/";
            },},{id: "news-2016-11-mimo-paper",
          title: '2016 11 Mimo Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-11-mimo-paper/";
            },},{id: "news-2016-11-admm",
          title: '2016 11 Admm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-11-admm/";
            },},{id: "news-2016-11-tcns-paper",
          title: '2016 11 Tcns Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-11-tcns-paper/";
            },},{id: "news-2017-01-qingjiang-ae",
          title: '2017 01 Qingjiang Ae',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-qingjiang-ae/";
            },},{id: "news-2017-01-stochastic-paper",
          title: '2017 01 Stochastic Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-stochastic-paper/";
            },},{id: "news-2017-01-spcom",
          title: '2017 01 Spcom',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-spcom/";
            },},{id: "news-2017-01-davood-award",
          title: '2017 01 Davood Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-davood-award/";
            },},{id: "news-2017-01-snmf",
          title: '2017 01 Snmf',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-snmf/";
            },},{id: "news-2017-01-tsg-paper",
          title: '2017 01 Tsg Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-tsg-paper/";
            },},{id: "news-2017-01-aistats-paper",
          title: '2017 01 Aistats Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-aistats-paper/";
            },},{id: "news-2017-02-nvidia-grant",
          title: '2017 02 Nvidia Grant',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-02-nvidia-grant/";
            },},{id: "news-2017-04-songtao-award",
          title: '2017 04 Songtao Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-04-songtao-award/";
            },},{id: "news-2017-04-gcca-paper",
          title: '2017 04 Gcca Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-04-gcca-paper/";
            },},{id: "news-2017-05-snmf-paper",
          title: '2017 05 Snmf Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-05-snmf-paper/";
            },},{id: "news-2017-05-icml",
          title: '2017 05 Icml',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-05-icml/";
            },},{id: "news-2017-06-sipn-paper",
          title: '2017 06 Sipn Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-06-sipn-paper/";
            },},{id: "news-2017-08-postdoc-hiring",
          title: '2017 08 Postdoc Hiring',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-08-postdoc-hiring/";
            },},{id: "news-2017-08-umn-move",
          title: '2017 08 Umn Move',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-08-umn-move/";
            },},{id: "news-2017-08-nsf-cmmi",
          title: '2017 08 Nsf Cmmi',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-08-nsf-cmmi/";
            },},{id: "news-2017-11-mlsp",
          title: '2017 11 Mlsp',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-11-mlsp/";
            },},{id: "news-2017-11-davood-defense",
          title: '2017 11 Davood Defense',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-11-davood-defense/";
            },},{id: "news-2018-02-ziping",
          title: '2018 02 Ziping',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-02-ziping/";
            },},{id: "news-2018-03-mmwave",
          title: '2018 03 Mmwave',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-03-mmwave/";
            },},{id: "news-2018-04-topic",
          title: '2018 04 Topic',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-04-topic/";
            },},{id: "news-2018-05-gradient-pd",
          title: '2018 05 Gradient Pd',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-05-gradient-pd/";
            },},{id: "news-2018-05-learning-optimize",
          title: '2018 05 Learning Optimize',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-05-learning-optimize/";
            },},{id: "news-2018-09-multi-agent",
          title: '2018 09 Multi Agent',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-09-multi-agent/";
            },},{id: "news-2018-09-actor-critic",
          title: '2018 09 Actor Critic',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-09-actor-critic/";
            },},{id: "news-2018-10-asilomar",
          title: '2018 10 Asilomar',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-10-asilomar/";
            },},{id: "news-2018-11-globalsip",
          title: '2018 11 Globalsip',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-11-globalsip/";
            },},{id: "news-2018-12-signsgd",
          title: '2018 12 Signsgd',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-12-signsgd/";
            },},{id: "news-2018-12-adam",
          title: '2018 12 Adam',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-12-adam/";
            },},{id: "news-2019-03-aro",
          title: '2019 03 Aro',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-03-aro/";
            },},{id: "news-2019-03-xinwei",
          title: '2019 03 Xinwei',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-03-xinwei/";
            },},{id: "news-2019-04-gradient",
          title: '2019 04 Gradient',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-04-gradient/";
            },},{id: "news-2019-06-distributed",
          title: '2019 06 Distributed',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-06-distributed/";
            },},{id: "news-2019-06-battery",
          title: '2019 06 Battery',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-06-battery/";
            },},{id: "news-2019-07-nsf",
          title: '2019 07 Nsf',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-07-nsf/";
            },},{id: "news-2019-08-afosr",
          title: '2019 08 Afosr',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-08-afosr/";
            },},{id: "news-2019-09-neurips",
          title: '2019 09 Neurips',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-09-neurips/";
            },},{id: "news-2019-11-princeton",
          title: '2019 11 Princeton',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-11-princeton/";
            },},{id: "news-2019-12-hybrid-block",
          title: '2019 12 Hybrid Block',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-12-hybrid-block/";
            },},{id: "news-2020-06-minmax-overview",
          title: '2020 06 Minmax Overview',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-06-minmax-overview/";
            },},{id: "news-2020-06-penalty",
          title: '2020 06 Penalty',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-06-penalty/";
            },},{id: "news-2020-06-icml",
          title: '2020 06 Icml',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-06-icml/";
            },},{id: "news-2020-07-nsf-intel",
          title: '2020 07 Nsf Intel',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-07-nsf-intel/";
            },},{id: "news-2020-07-ibm-award",
          title: '2020 07 Ibm Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-07-ibm-award/";
            },},{id: "news-2020-08-prashant",
          title: '2020 08 Prashant',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-08-prashant/";
            },},{id: "news-2020-08-iccm-award",
          title: '2020 08 Iccm Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-08-iccm-award/";
            },},{id: "news-2020-09-songtao-ibm",
          title: '2020 09 Songtao Ibm',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-09-songtao-ibm/";
            },},{id: "news-2020-09-neurips",
          title: '2020 09 Neurips',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-09-neurips/";
            },},{id: "news-2020-10-mimo",
          title: '2020 10 Mimo',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-10-mimo/";
            },},{id: "news-2020-12-hybrid-fl",
          title: '2020 12 Hybrid Fl',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-12-hybrid-fl/";
            },},{id: "news-2020-12-a3c",
          title: '2020 12 A3c',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-12-a3c/";
            },},{id: "news-2021-02-best-paper",
          title: '2021 02 Best Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-02-best-paper/";
            },},{id: "news-2021-04-wireless",
          title: '2021 04 Wireless',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-04-wireless/";
            },},{id: "news-2021-05-riemannian",
          title: '2021 05 Riemannian',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-05-riemannian/";
            },},{id: "news-2021-05-rmsprop",
          title: '2021 05 Rmsprop',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-05-rmsprop/";
            },},{id: "news-2021-05-saddle",
          title: '2021 05 Saddle',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-05-saddle/";
            },},{id: "news-2021-05-bilevel",
          title: '2021 05 Bilevel',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-05-bilevel/";
            },},{id: "news-2021-06-stem",
          title: '2021 06 Stem',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-06-stem/";
            },},{id: "news-2021-12-sps-best-paper-2016",
          title: '2021 12 Sps Best Paper 2016',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-12-sps-best-paper-2016/";
            },},{id: "news-2022-05-xiangyi-graduation",
          title: '2022 05 Xiangyi Graduation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-05-xiangyi-graduation/";
            },},{id: "news-2022-10-hiking",
          title: '2022 10 Hiking',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-10-hiking/";
            },},{id: "news-2022-12-sps-best-paper",
          title: '2022 12 Sps Best Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-12-sps-best-paper/";
            },},{id: "news-2022-12-escape-room",
          title: '2022 12 Escape Room',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-12-escape-room/";
            },},{id: "news-2022-12-sps-career-award",
          title: '2022 12 Sps Career Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-12-sps-career-award/";
            },},{id: "news-2023-06-sps-awards",
          title: '2023 06 Sps Awards',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-06-sps-awards/";
            },},{id: "news-2023-09-kayak",
          title: '2023 09 Kayak',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-09-kayak/";
            },},{id: "news-2023-11-xinwei-defense",
          title: '2023 11 Xinwei Defense',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-11-xinwei-defense/";
            },},{id: "news-2023-11-xinwei-dinner",
          title: '2023 11 Xinwei Dinner',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-11-xinwei-dinner/";
            },},{id: "news-2023-12-neurips",
          title: '2023 12 Neurips',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-neurips/";
            },},{id: "news-2024-07-nsf-bilevel",
          title: '2024 07 Nsf Bilevel',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-nsf-bilevel/";
            },},{id: "news-2024-08-informs-award",
          title: '2024 08 Informs Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-informs-award/";
            },},{id: "news-2024-09-kayak",
          title: '2024 09 Kayak',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-kayak/";
            },},{id: "news-2024-09-neurips-accept",
          title: '2024 09 Neurips Accept',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-neurips-accept/";
            },},{id: "news-2024-11-ibm-award",
          title: '2024 11 Ibm Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-ibm-award/";
            },},{id: "news-2024-11-nsf-irl",
          title: '2024 11 Nsf Irl',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-nsf-irl/";
            },},{id: "news-2024-12-nsf-molecule",
          title: '2024 12 Nsf Molecule',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-nsf-molecule/";
            },},{id: "news-2025-01-amazon-fellowship",
          title: '2025 01 Amazon Fellowship',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-amazon-fellowship/";
            },},{id: "news-2025-01-ieee-fellow",
          title: '2025 01 Ieee Fellow',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-ieee-fellow/";
            },},{id: "news-2025-02-iclr-accept",
          title: '2025 02 Iclr Accept',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-iclr-accept/";
            },},{id: "news-2025-04-icml-accept",
          title: '2025 04 Icml Accept',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-icml-accept/";
            },},{id: "news-2025-05-blur-unlearning",
          title: '2025 05 Blur Unlearning',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-blur-unlearning/";
            },},{id: "news-2025-05-siliang-defense",
          title: '2025 05 Siliang Defense',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-siliang-defense/";
            },},{id: "news-2025-05-multi-turn-rl",
          title: '2025 05 Multi Turn Rl',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-multi-turn-rl/";
            },},{id: "news-2025-05-openphilanthropy",
          title: '2025 05 Openphilanthropy',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-openphilanthropy/";
            },},{id: "news-2025-06-pretraining-paper",
          title: '2025 06 Pretraining Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-pretraining-paper/";
            },},{id: "news-2025-07-iccopt-talk",
          title: '2025 07 Iccopt Talk',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-iccopt-talk/";
            },},{id: "news-2025-07-nsf-fusion",
          title: '2025 07 Nsf Fusion',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-nsf-fusion/";
            },},{id: "news-2025-09-new-students",
          title: '2025 09 New Students',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-new-students/";
            },},{id: "news-2025-09-bilevel-paper",
          title: '2025 09 Bilevel Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-bilevel-paper/";
            },},{id: "news-2025-09-balas-prize",
          title: '2025 09 Balas Prize',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-balas-prize/";
            },},{id: "news-2025-11-bilevel-slides",
          title: '2025 11 Bilevel Slides',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-bilevel-slides/";
            },},{id: "news-2025-11-oscar-joining",
          title: '2025 11 Oscar Joining',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-oscar-joining/";
            },},{id: "news-2025-11-dawei-joining",
          title: '2025 11 Dawei Joining',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-dawei-joining/";
            },},{id: "news-2025-12-jpmorgan-award",
          title: '2025 12 Jpmorgan Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-jpmorgan-award/";
            },},{id: "news-2026-01-informs-sessions",
          title: '2026 01 Informs Sessions',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-informs-sessions/";
            },},{id: "news-2026-02-spm-tutorial",
          title: '2026 02 Spm Tutorial',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-spm-tutorial/";
            },},{id: "projects-leak-k",
          title: 'Leak@k',
          description: "A meta-metric evaluation framework to evaluate robustness of LLM unlearning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_leak-k/";
            },},{id: "projects-large-scale-optimization",
          title: 'Large-Scale Optimization',
          description: "Design and analysis of modern optimization algorithms for large-scale problems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_optimization/";
            },},{id: "projects-machine-learning",
          title: 'Machine Learning',
          description: "Optimization approaches for machine learning problems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_machine_learning/";
            },},{id: "projects-distributed-multi-agent-systems",
          title: 'Distributed Multi-Agent Systems',
          description: "Distributed in-network data processing and parallel optimization algorithms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_multiagent/";
            },},{id: "projects-next-generation-communication-networks",
          title: 'Next Generation Communication Networks',
          description: "Cross-layer optimization for 5G and beyond wireless networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_networks/";
            },},{id: "projects-bilevel-and-min-max-optimization",
          title: 'Bilevel and Min-Max Optimization',
          description: "Theory and algorithms for bilevel and minimax optimization problems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_bilevel/";
            },},{id: "projects-federated-learning",
          title: 'Federated Learning',
          description: "Distributed and federated learning algorithms for heterogeneous data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_federated/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%68%6F%6E%67@%75%6D%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qRnP-p0AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/OptimAI-Lab", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/OptimAI_LAB", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
