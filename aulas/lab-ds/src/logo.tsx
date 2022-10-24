import { SVGAttributes} from 'react'

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props:LogoProps) {
  return (
    <svg
      width={85}
      height={73}
      viewBox="0 0 85 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M85 36.508c0-5.43-7.052-10.576-17.863-13.768 2.495-10.626 1.386-19.08-3.5-21.788-1.126-.635-2.443-.935-3.88-.935v3.726c.796 0 1.438.15 1.975.434 2.356 1.303 3.378 6.266 2.581 12.649-.19 1.57-.502 3.224-.884 4.912-3.395-.802-7.103-1.42-11.001-1.821-2.34-3.091-4.765-5.899-7.208-8.355C50.868 6.5 56.17 3.726 59.774 3.726V0c-4.765 0-11.002 3.275-17.309 8.956C36.16 3.308 29.921.066 25.157.066v3.727c3.586 0 8.905 2.757 14.554 7.786a79.634 79.634 0 00-7.156 8.338c-3.916.4-7.623 1.019-11.02 1.838a48.777 48.777 0 01-.9-4.846c-.814-6.383.19-11.345 2.53-12.665.52-.3 1.195-.434 1.992-.434V.084c-1.455 0-2.772.3-3.916.935-4.868 2.707-5.96 11.145-3.447 21.738C7.017 25.965 0 31.095 0 36.508c0 5.43 7.052 10.577 17.863 13.768-2.495 10.627-1.386 19.081 3.5 21.788 1.126.635 2.442.936 3.898.936 4.765 0 11.002-3.275 17.308-8.956 6.307 5.648 12.544 8.89 17.309 8.89 1.455 0 2.772-.302 3.915-.936 4.869-2.707 5.96-11.145 3.448-21.739C77.983 47.07 85 41.922 85 36.51zM62.442 25.364a73.393 73.393 0 01-2.34 6.6 78.206 78.206 0 00-2.269-4.01 89.997 89.997 0 00-2.495-3.91c2.46.35 4.834.785 7.104 1.32zm-7.935 17.794c-1.352 2.256-2.738 4.395-4.176 6.383a93.46 93.46 0 01-7.831.334c-2.616 0-5.232-.117-7.797-.317a91.73 91.73 0 01-4.192-6.35 85.956 85.956 0 01-3.604-6.65 85.996 85.996 0 013.586-6.666c1.352-2.256 2.738-4.395 4.176-6.383a93.461 93.461 0 017.831-.334c2.616 0 5.232.117 7.797.317a91.778 91.778 0 014.192 6.35 85.99 85.99 0 013.604 6.65 92.38 92.38 0 01-3.586 6.666zm5.596-2.172a69.895 69.895 0 012.39 6.65c-2.269.535-4.66.986-7.137 1.337a91.84 91.84 0 002.495-3.96 93.785 93.785 0 002.252-4.027zM42.535 58.814a69.706 69.706 0 01-4.817-5.346c1.56.066 3.153.117 4.765.117 1.628 0 3.24-.034 4.816-.117a65.962 65.962 0 01-4.764 5.346zm-12.89-9.841a80.755 80.755 0 01-7.104-1.32 73.422 73.422 0 012.339-6.6 78.284 78.284 0 002.27 4.01 110.15 110.15 0 002.494 3.91zm12.803-34.77a69.706 69.706 0 014.817 5.346c-1.56-.067-3.154-.117-4.765-.117-1.629 0-3.24.034-4.816.117a65.962 65.962 0 014.764-5.347zm-12.821 9.84a91.742 91.742 0 00-4.747 7.97 69.921 69.921 0 01-2.391-6.65c2.27-.517 4.66-.968 7.138-1.32zm-15.68 20.92c-6.133-2.523-10.1-5.831-10.1-8.455 0-2.623 3.967-5.948 10.1-8.454 1.49-.618 3.119-1.17 4.8-1.688.987 3.275 2.286 6.684 3.898 10.176-1.594 3.475-2.876 6.867-3.847 10.125a53.92 53.92 0 01-4.85-1.704zm9.321 23.877c-2.356-1.304-3.378-6.266-2.581-12.649.19-1.57.502-3.225.883-4.912 3.396.802 7.104 1.42 11.002 1.821 2.34 3.091 4.765 5.898 7.208 8.354-5.648 5.063-10.95 7.837-14.554 7.837-.78-.017-1.438-.167-1.958-.451zm41.097-12.732c.814 6.382-.19 11.345-2.53 12.665-.52.3-1.195.434-1.992.434-3.586 0-8.905-2.757-14.554-7.786a79.644 79.644 0 007.156-8.338c3.916-.4 7.623-1.019 11.02-1.838.398 1.688.71 3.309.9 4.863zm6.67-11.145c-1.49.618-3.118 1.17-4.799 1.688-.987-3.275-2.287-6.684-3.898-10.176 1.594-3.476 2.876-6.867 3.846-10.126a56.31 56.31 0 014.869 1.705c6.133 2.523 10.1 5.831 10.1 8.454-.017 2.624-3.984 5.949-10.118 8.455z"
        fill="#81D8F7"
      />
      <path
        d="M41.982 46.587c4.63 0 8.383-3.84 8.383-8.578 0-4.737-3.753-8.577-8.383-8.577-4.63 0-8.384 3.84-8.384 8.577s3.754 8.578 8.384 8.578z"
        fill="#81D8F7"
      />
    </svg>
  )
}
